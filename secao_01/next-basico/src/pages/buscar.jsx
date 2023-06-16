import Link from 'next/link';
import {useRouter} from 'next/router';

export default function buscar() {
    const router = useRouter();
    return (
        <div>
           <ul>
            <Link href="/18/ruan">
                <li>Page Ruan</li>
            </Link>
           </ul>
           <div>
                <button onClick={() => router.push('/18/ruan')}>Entrar na página Ruan</button>
           </div>
        </div>
    )
}