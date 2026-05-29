<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    // Register
    public function register(Request $request) {
        $data = $request->validate([
            'name'     => 'required|string',
            'email'    => 'required|email|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        $user = User::create($data);

        $token = $user->createToken('access_token')->plainTextToken;

        return response()->json([
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $token, 
        ], 201);
    }

    // Login
    public function login(Request $request) {
        $data = $request->validate([
            'email'    => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($data)) {
            return response()->json(['message' => 'Invalid credentials.'], 401);
        }

        $user  = $request->user();
        $token = $user->createToken('access_token')->plainTextToken;
        
        return response()->json([
            'message' => 'User logged in successfully',
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    // Get User 
    public function user(Request $request) {
        return response()->json([
            'user' => $request->user(),
        ], 200);
    }

    // Forgot Password
    public function forgotPassword(Request $request) {
        $request->validate(['email' => 'required|email|exists:users,email']);

        $token = Str::random(64);

        DB::table('password_reset_tokens')->updateOrInsert(
            ['email' => $request->email],
            ['token' => $token, 'created_at' => now()]
        );

        $resetLink = env('FRONTEND_URL') . "/reset-password?token=" . $token . "&email=" . $request->email;

        Mail::send([], [], function ($message) use ($request, $resetLink) {
            $message->to($request->email)
                ->subject('Reset Your Password')
                ->html("
                    <div style='font-family: sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;'>
                        <div style='max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);'>
                            <div style='text-align: center; margin-bottom: 32px;'>
                                <div style='width: 48px; h-48px; background-color: #6366f1; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; color: white; font-weight: 900; font-size: 20px; line-height: 48px;'>C</div>
                                <h1 style='font-size: 24px; font-weight: 800; color: #0f172a; margin-top: 16px; margin-bottom: 8px;'>Reset your password</h1>
                                <p style='color: #64748b; font-size: 16px;'>Securely update your CORE account credentials</p>
                            </div>
                            
                            <div style='background-color: #f1f5f9; border-radius: 12px; padding: 24px; margin-bottom: 32px;'>
                                <p style='margin: 0; line-height: 1.6;'>You recently requested to reset your password for your CORE account. Click the button below to proceed:</p>
                            </div>

                            <a href='{$resetLink}' style='display: block; background-color: #6366f1; color: #ffffff; text-decoration: none; padding: 16px; border-radius: 12px; text-align: center; font-weight: 700; font-size: 16px; box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);'>
                                Reset Password
                            </a>

                            <div style='margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0; text-align: center;'>
                                <p style='font-size: 13px; color: #94a3b8; line-height: 1.6;'>
                                    This link will expire in 60 minutes. If you did not request this reset, you can safely ignore this email.
                                </p>
                            </div>
                        </div>
                    </div>
                ");
        });

        return response()->json(['message' => 'Reset link sent to your email.'], 200);
    }

    // Reset Password
    public function resetPassword(Request $request) {
        $request->validate([
            'email' => 'required|email|exists:users,email',
            'token' => 'required',
            'password' => 'required|min:6|confirmed',
        ]);

        $reset = DB::table('password_reset_tokens')
            ->where('email', $request->email)
            ->where('token', $request->token)
            ->first();

        if (!$reset) {
            return response()->json(['message' => 'Invalid token or email.'], 400);
        }

        $user = User::where('email', $request->email)->first();
        $user->update(['password' => Hash::make($request->password)]);

        DB::table('password_reset_tokens')->where('email', $request->email)->delete();

        return response()->json(['message' => 'Password reset successfully.'], 200);
    }

    // Logout
    public function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'User logged out successfully',
        ], 200);
    }

}
