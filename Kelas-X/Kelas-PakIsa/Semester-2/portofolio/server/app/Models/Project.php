<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'tech_stack',
        'image_path',
        'link_demo',
        'link_repo',
        'order',
    ];

    protected $casts = [
        'tech_stack' => 'array',
    ];
}
