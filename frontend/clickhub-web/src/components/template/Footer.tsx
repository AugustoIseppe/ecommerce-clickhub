export default function Footer() {
    return (
        <footer className="flex justify-center bg-white border-t border-zinc-300 px-6 py-3">
            <span className="text-black text-sm">
                Todos os direitos reservados &copy; {new Date().getFullYear()}
            </span>
        </footer>
    );
}