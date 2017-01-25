<?php

namespace Src\Backend\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table = 'users';

    protected $fillable = [
        'user_name',
        'user_email'
    ];
}