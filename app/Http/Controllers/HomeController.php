<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'plans' => $this->getHostingPlans(),
            'articles' => $this->getArticles(),
        ]);
    }

    private function getHostingPlans()
    {
        return [
            [
                'name' => 'DAWN-id',
                'tagline' => 'Untuk Memulai Website Pertama Anda',
                'desc' => 'Pilihan ideal bagi personal, blog, portofolio, maupun UMKM yang ingin memiliki website cepat, aman, dan mudah dikelola.',
                'features' => [
                    '500 MB Web Space',
                    'Unmetered Bandwidth',
                    '1 Addon Domain',
                    'Total 2 Domain',
                    'Unlimited Email & FTP',
                    'cPanel + LiteSpeed + SSL Gratis',
                ],
                'featured' => false,
            ],
            [
                'name' => 'DUSK-id',
                'tagline' => 'Untuk Website Bisnis yang Berkembang',
                'desc' => 'Resource lebih besar untuk website dengan trafik yang mulai meningkat.',
                'features' => [
                    '750 MB Web Space',
                    'Unmetered Bandwidth',
                    '4 Addon Domain',
                    'Total 5 Domain',
                    'Unlimited Email & FTP',
                    'cPanel + LiteSpeed + SSL Gratis',
                ],
                'featured' => false,
            ],
            [
                'name' => 'NIGHT-id',
                'tagline' => 'Untuk Website Profesional',
                'desc' => 'Performa tinggi untuk website perusahaan, toko online, dan project profesional.',
                'features' => [
                    '1.5 GB Web Space',
                    'Unmetered Bandwidth',
                    '10 Addon Domain',
                    'Total 11 Domain',
                    'Unlimited Email & FTP',
                    'cPanel + LiteSpeed + SSL Gratis',
                ],
                'featured' => false,
            ],
            [
                'name' => 'MIDNIGHT-id',
                'tagline' => 'Untuk Website Skala Besar',
                'desc' => 'Kapasitas maksimal untuk bisnis yang membutuhkan resource lebih besar.',
                'features' => [
                    '3 GB Web Space',
                    'Unmetered Bandwidth',
                    '25 Addon Domain',
                    'Total 26 Domain',
                    'Unlimited Email & FTP',
                    'cPanel + LiteSpeed + SSL Gratis',
                ],
                'featured' => false,
            ],
        ];
    }

    private function getArticles()
    {
        return [
            [
                'title' => 'Cara Memilih Hosting Terbaik Untuk Website Anda',
                'excerpt' => 'Memilih hosting yang tepat adalah langkah penting untuk memastikan website Anda berjalan dengan lancar dan stabil.',
                'image' => '/images/article-hosting.jpg',
                'date' => '1 Juni 2025',
                'readTime' => '5 min read',
            ],
            [
                'title' => 'Panduan Lengkap Registrasi Domain .ID',
                'excerpt' => 'Pelajari langkah-langkah mudah untuk mendaftarkan domain .id dan membangun identitas digital Anda.',
                'image' => '/images/article-hosting.jpg',
                'date' => '28 Mei 2025',
                'readTime' => '4 min read',
            ],
            [
                'title' => 'Tips Mengamankan Website dari Serangan Cyber',
                'excerpt' => 'Keamanan website adalah prioritas utama. Simak tips dan trik untuk melindungi website Anda.',
                'image' => '/images/article-hosting.jpg',
                'date' => '20 Mei 2025',
                'readTime' => '6 min read',
            ],
        ];
    }
}
