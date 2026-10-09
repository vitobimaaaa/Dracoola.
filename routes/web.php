<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\DomainController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/domain', [DomainController::class, 'index'])->name('domain');
Route::get('/web-hosting', function () {
    return Inertia::render('WebHosting');
})->name('web-hosting');

// Secondary service and info routes
Route::get('/reseller-hosting', function () {
    return Inertia::render('ResellerHosting');
})->name('reseller-hosting');

Route::get('/support', function () {
    return Inertia::render('Support');
})->name('support');

Route::get('/faq', function () {
    return redirect('/#faq');
})->name('faq');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/auth.php';