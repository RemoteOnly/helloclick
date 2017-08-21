<?php

namespace App\Providers;

use App\Models\Tag;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // 导航
        $banners = Cache::rememberForever('banners', function () {
            return Tag::banners()->get();
        });
        $favorites = Cache::remember('favorites', 24 * 60, function () {
            $favorites = Tag::favorite()->get();
            return $favorites;
        });
        view()->share('banners', $banners);
        view()->share('favorites', $favorites);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // register laravel-ide-helper service
        if ($this->app->environment() !== 'production') {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
    }
}
