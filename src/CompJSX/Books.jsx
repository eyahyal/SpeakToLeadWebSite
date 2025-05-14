import { BooksData } from "../Data/BooksData";
import style from '../CompCSS/Books.module.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Books() {
    const [favorites, setFavorites] = useState([]);
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

    const toggleFavorite = (book) => {
        if (favorites.includes(book)) {
            setFavorites(favorites.filter(fav => fav !== book));
        } else {
            setFavorites([...favorites, book]);
        }
    };

    const displayedBooks = showFavoritesOnly ? favorites : BooksData;
    const navigate = useNavigate();
    const [Active,setActive]=useState(true)

    return (
        <>
            <div className={Active? style.SidBarActive : style.SidBar}>
                <div className={Active? style.LogoContentActive : style.LogoContent}>
                        <div className={Active? style.NavLogoTitleActive : style.NavLogoTitle}>SpeakToLead</div>
                    <button onClick={()=>{setActive(!Active)}}>
                        <box-icon name='menu' className={Active? style.NavMenuActive : style.NavMenu}></box-icon>
                    </button>
            </div>
            <ul className={style.ulSidBar}>
                <li className={Active ? style.NavLiActive : style.NavLi} key="toggleFavorites">
                    <a onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}>
                        <box-icon name='star' className={Active ? style.SidBarLiBoxActive : style.SidBarLiBox}></box-icon>
                        <span className={Active ? style.SidBarLiHomeActive : style.SidBarLiHome}>
                            {showFavoritesOnly ? "🔁 All Books" : "⭐ Favorites"}
                        </span>
                    </a>
                    <span className={Active ? style.SidBarLiHomeCssActive : style.SidBarLiHomeCss}>
                        {showFavoritesOnly ? "🔁 All Books" : "⭐ Favorites"}
                    </span>
                </li>
                <li className={Active ? style.NavLiActive : style.NavLi} key="goBack">
                    <a onClick={() => navigate("/")}>
                        <box-icon name='arrow-back' className={Active ? style.SidBarLiBoxActive : style.SidBarLiBox}></box-icon>
                        <span className={Active ? style.SidBarLiHomeActive : style.SidBarLiHome}>⬅️ Go Back</span>
                    </a>
                    <span className={Active ? style.SidBarLiHomeCssActive : style.SidBarLiHomeCss}>⬅️ Go Back</span>
                </li>
            </ul>

                    </div>
            {displayedBooks.length > 0 ? (
                displayedBooks.map((book, index) => (
                    <div key={index} className={style.bookCard}>
                        <div className={style.leftSide}>
                            <img src={book.img} alt={book.name} className={style.bookImg} />
                            <h2 className={style.bookName}>{book.name}</h2>
                        </div>
                        <div className={style.buttons}>
                            <button className={style.downloadBtn}>
                                <a href={book.url} download>Download Book</a>
                            </button>
                            <button className={style.starBtn} onClick={() => toggleFavorite(book)}>
                                {favorites.includes(book) ? "⭐ Unstar" : "⭐ Star"}
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className={style.NoFav}>No favorite books yet....</p>
            )}
        </>
    );
}

export default Books;
