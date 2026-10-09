import PrimaryButton from '@/Components/UI/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout header="Verifikasi Email" description="Terima kasih telah mendaftar! Sebelum mulai, silakan verifikasi alamat email Anda.">
            <Head title="Email Verification - Dracoola Multimedia" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 text-sm font-medium text-green-500">
                    Link verifikasi baru telah dikirimkan ke alamat email Anda.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-6 flex flex-col gap-3">
                    <PrimaryButton className="w-full justify-center auth-btn-primary" disabled={processing}>
                        Kirim Ulang Email Verifikasi
                    </PrimaryButton>

                    <div className="text-center mt-2">
                        <Link
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="auth-link font-medium"
                        >
                            Log Out
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
