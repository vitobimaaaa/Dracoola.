<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DomainController extends Controller
{
    public function index()
    {
        return Inertia::render('Domain', [
            'domains' => $this->getDomainPricing(),
            'faqs' => $this->getFAQs(),
        ]);
    }

    private function getDomainPricing()
    {
        return [
            ['ext' => '.com', 'status' => 'Tersedia', 'price' => 'Rp 165.000'],
            ['ext' => '.id', 'status' => 'Tersedia', 'price' => 'Rp 165.000'],
            ['ext' => '.co.id', 'status' => 'Tersedia', 'price' => 'Rp 165.000'],
            ['ext' => '.net', 'status' => 'Tersedia', 'price' => 'Rp 165.000'],
            ['ext' => '.org', 'status' => 'Tersedia', 'price' => 'Rp 165.000'],
            ['ext' => '.store', 'status' => 'Tersedia', 'price' => 'Rp 165.000'],
            ['ext' => '.online', 'status' => 'Tersedia', 'price' => 'Rp 165.000'],
        ];
    }

    private function getFAQs()
    {
        return [
            [
                'question' => 'Apa itu domain?',
                'answer' => 'Domain adalah alamat unik yang digunakan untuk mengidentifikasi sebuah website di internet. Contohnya: dracoola.com, google.com, dll.',
            ],
            [
                'question' => 'Bagaimana cara mendaftarkan domain baru?',
                'answer' => 'Untuk mendaftarkan domain baru, cukup masukkan nama domain yang diinginkan pada kolom pencarian. Jika domain tersedia, ikuti proses pemesanan dan pembayaran.',
            ],
            [
                'question' => 'Berapa lama proses registrasi domain?',
                'answer' => 'Proses registrasi domain biasanya selesai dalam hitungan menit setelah pembayaran dikonfirmasi. Untuk domain .id dan .co.id, mungkin memerlukan waktu tambahan.',
            ],
            [
                'question' => 'Apakah saya bisa transfer domain dari registrar lain?',
                'answer' => 'Ya, Anda bisa transfer domain dari registrar lain ke Dracoola. Anda memerlukan kode EPP/Authorization dari registrar sebelumnya.',
            ],
            [
                'question' => 'Apakah domain bisa di-refund?',
                'answer' => 'Domain yang sudah terdaftar tidak dapat dikembalikan (non-refundable). Pastikan Anda sudah yakin dengan pilihan domain sebelum melakukan pemesanan.',
            ],
            [
                'question' => 'Apa itu WHOIS Privacy Protection?',
                'answer' => 'WHOIS Privacy Protection adalah layanan yang menyembunyikan informasi pribadi Anda dari database WHOIS publik.',
            ],
            [
                'question' => 'Apakah domain otomatis diperpanjang?',
                'answer' => 'Ya, secara default domain akan diperpanjang otomatis mendekati tanggal kadaluarsa. Anda dapat menonaktifkan fitur auto-renewal melalui panel kontrol.',
            ],
            [
                'question' => 'Berapa harga perpanjangan domain?',
                'answer' => 'Harga perpanjangan bervariasi tergantung ekstensi domain. Silakan cek tabel harga domain di halaman ini untuk informasi lengkap.',
            ],
        ];
    }
}
