<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Jobs\AddUser;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        // Dispatch job để thêm người dùng
        AddUser::dispatch($request->name, $request->email, $request->password);

        return response()->json(['message' => 'User is being added to the queue.']);
    }
}
