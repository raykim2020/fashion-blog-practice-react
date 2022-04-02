export default function Header() {
    return (
        <header>
            <h1>Sartre's List</h1>
            <h2 className="subtitle">Better-Dressed People</h2>
            <nav aria-label="Main Navigation" role="navigation">
                <ul className="main-navigation">
                    <li><a href="">Women's</a></li>
                    <li><a href="">Men's</a></li>
                    <li><a href="">On the Street</a></li>
                    <li><a href="">The Catwalk</a></li>
                    <li><a href="">AdWatch</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </nav>
        </header>
    );
}