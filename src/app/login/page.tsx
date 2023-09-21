import Script from 'next/script';
import Main from './components/main';

export default function Login() {
  return (
    <div className="m-auto w-full py-10 md1440:max-w-screen-md425">
      <h2 className="mb-10 text-center text-4xl">登陆</h2>
      <Main />
    </div>
  );
}
