import {redirect} from 'next/navigation'; import {getSession} from '@/lib/auth'; export default async function Admin(){redirect((await getSession())?'/admin/dashboard':'/admin/login')}
