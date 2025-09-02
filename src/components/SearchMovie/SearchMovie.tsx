import { memo, useRef, useState } from 'react';
import './SearchMovie.scss';
import { useQuery } from '@tanstack/react-query';
import { fetchMovies } from '../../api/movies/movies';
import { Loader } from '../Loader/Loader';
import { queryClient } from '../../api/queryClient';
import { SearchMovieResults } from '../SearchMovieResults/SearchMovieResults';
import { Button } from '../Button/Button';

export const SearchMovie = memo(() => {
    const [searchTitle, setSearchTitle] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [searchMobileActive, setSearchMobileActive] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const { data: searchResults, isLoading: isSearchLoading } = useQuery({
        queryFn: () => fetchMovies({
            count: 5,
            title: searchTitle,
        }),
        queryKey: ["search", searchTitle]
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTitle(e.target.value);
        setShowResults(e.target.value.length >= 2);
    };

    const handleSearchFocus = () => {
        if (searchTitle.length >= 2) {
            setShowResults(true);
        }
    };

    const handleMovieSelect = (selectedMovieId: string) => {
        setSearchTitle("");
        setShowResults(false);
        queryClient.refetchQueries({ queryKey: ["movie", selectedMovieId] })
        setSearchMobileActive(false);
    };

    const clearInput = () => {
        setSearchTitle("");
        setShowResults(false);
    }

    return (
        <>
            {/* Desktop */}
            <div className="search-movie search-movie--desktop">
                <div className="search-movie__wrapper">
                    <div className="search-movie__input-wrapper">
                        <svg className="search-movie__icon" width={24} height={24}>
                            <use xlinkHref="./images/sprite.svg#search-icon" />
                        </svg>
                        <input
                            className="search-movie__field"
                            placeholder="Поиск"
                            type="text"
                            name="header-search"
                            id="header-search--desktop"
                            value={searchTitle}
                            onChange={handleSearchChange}
                            onFocus={handleSearchFocus}
                        />
                        <button
                            className={showResults ? "search-movie__close-btn search-movie__close-btn--block" : "search-movie__close-btn"}
                            aria-label='Очистить поисковую строку'
                            onClick={() => {
                                clearInput()
                                setSearchMobileActive(false);
                            }}
                        >
                            <svg
                                width={24}
                                height={24}>
                                <use xlinkHref="./images/sprite.svg#close-icon" />
                            </svg>
                        </button>
                    </div>
                    {(showResults && searchTitle.length >= 2) &&
                        <div className='search-movie__results'>
                            {isSearchLoading ? (
                                <Loader />
                            ) : (
                                (searchResults && searchResults.length > 0) ? (
                                    <SearchMovieResults searchResults={searchResults} handleMovieSelect={handleMovieSelect} />
                                ) : (
                                    <div className="search-movie__empty">
                                        Ничего не найдено
                                    </div>
                                )
                            )
                            }
                        </div>
                    }
                </div>
            </div>

            {/* Mobile */}
            <div className="search-movie search-movie--mobile">
                <div className={searchMobileActive ? 'search-movie__wrapper search-movie__wrapper--active' : 'search-movie__wrapper'}>
                    <div className="search-movie__input-wrapper">
                        <svg className="search-movie__icon" width={24} height={24}>
                            <use xlinkHref="./images/sprite.svg#search-icon" />
                        </svg>
                        <input
                            ref={inputRef}
                            className="search-movie__field"
                            placeholder="Поиск"
                            type="text"
                            name="header-search"
                            id="header-search--mobile"
                            value={searchTitle}
                            onChange={handleSearchChange}
                            onFocus={handleSearchFocus}
                        />
                        <button
                            className={showResults ? "search-movie__close-btn search-movie__close-btn--block" : "search-movie__close-btn"}
                            aria-label='Очистить поисковую строку'
                            onClick={() => {
                                clearInput()
                                setSearchMobileActive(false);
                            }}
                        >
                            <svg
                                width={13}
                                height={13}>
                                <use xlinkHref="./images/sprite.svg#close-icon-small" />
                            </svg>
                        </button>
                    </div>
                    {(showResults && searchTitle.length >= 2) &&
                        <div className='search-movie__results'>
                            {isSearchLoading ? (
                                <Loader />
                            ) : (
                                (searchResults && searchResults.length > 0) ? (
                                    <SearchMovieResults searchResults={searchResults} handleMovieSelect={handleMovieSelect} />
                                ) : (
                                    <div className="search-movie__empty">
                                        Ничего не найдено
                                    </div>
                                )
                            )
                            }
                        </div>
                    }
                </div>
                <Button
                    classNames="header__search-btn btn--icon btn--icon-no-padding"
                    ariaLabel='Поиск'
                    icon={{
                        name: "search-icon",
                        width: 24,
                        height: 24
                    }}
                    handleClick={() => {
                        setSearchMobileActive(true);
                        inputRef.current?.focus();
                    }}
                />
            </div>
        </>
    )
})