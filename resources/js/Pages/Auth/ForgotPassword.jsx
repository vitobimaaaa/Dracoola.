import InputError from '@/Components/UI/InputError';
import InputLabel from '@/Components/UI/InputLabel';
import PrimaryButton from '@/Components/UI/PrimaryButton';
import TextInput from '@/Components/UI/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout header="Lupa Kata Sandi" description="Masukkan email Anda untuk menerima link reset kata sandi">
            <Head title="Forgot Password - Dracoola Multimedia" />

            {status && <div className="mb-4 text-sm font-medium text-green-500">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-6 flex flex-col gap-3">
                    <PrimaryButton className="w-full justify-center auth-btn-primary" disabled={processing}>
                        Kirim Link Reset Password
                    </PrimaryButton>

                    <div className="text-center mt-2">
                        <Link href={route('login')} className="auth-link font-medium">
                            &larr; Kembali ke Login
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
