<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Kategori;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMenuRequest;
use App\Http\Requests\UpdateMenuRequest;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $kategoris = Kategori::all();
        $menus = Menu::join('kategoris', 'menus.idkategori', '=', 'kategoris.idkategori')
            ->select(['menus.*', 'kategoris.*'])
            ->paginate(3);

        return view('backend.menu.select', [
            'menus' => $menus,
            'kategoris' => $kategoris,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('backend.menu.insert');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMenuRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'gambar' => 'required | max:2045'
        ]);
        $namaGambar = $request->file('gambar')->getClientOriginalName();

        $request->gambar->move(public_path('gambar'), $namaGambar);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function edit(Menu $menu)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMenuRequest  $request
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMenuRequest $request, Menu $menu)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Menu  $menu
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu)
    {
        //
    }

    public function select(Request $request)
    {
        $id = $request->idkategori;
        $kategoris = Kategori::all();
        $menus = Menu::join('kategoris', 'menus.idkategori', '=', 'kategoris.idkategori')
            ->select(['menus.*', 'kategoris.*'])
            ->where('menus.idkategori', $id)
            ->paginate(1);

        return view('backend.menu.select', [
            'menus' => $menus,
            'kategoris' => $kategoris,
        ]);
    }
}
