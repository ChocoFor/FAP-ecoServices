<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;
    protected $fillable = [
        'name','email','password','type'
    ];
    protected $hidden = [
        'password' , 'remember_token',
    ];

    // savoir si c'est  un utilisateur est un particulier
    public function estParticulier(){
        return $this-> type === 'particulier';
    }

    // savoir si c'est un utilisateur société
    public function estSociete(){
        return $this->type === 'Societe';
    }

}
