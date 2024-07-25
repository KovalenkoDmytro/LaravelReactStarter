<?php

namespace App\Providers;

use App\Http\Controllers\RealEstateController;
use App\Interfaces\Services\IRealEstateService;
use App\Services\RealEstateService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // RealEstate
        $this->app->when(RealEstateController::class)
            ->needs(IRealEstateService::class)
            ->give(RealEstateService::class);

        $this->app->bind(
            IRealEstateService::class,
            RealEstateService::class
        );

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
