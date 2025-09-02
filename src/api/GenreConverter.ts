import { TGenreObject } from "./movies/types";

const genreTranslations: Record<string, string> = {
  "action": "боевики",
  "adventure": "приключения",
  "animation": "мультфильмы",
  "comedy": "комедии",
  "crime": "криминал",
  "documentary": "документальные",
  "drama": "драма",
  "fantasy": "фэнтези",
  "horror": "ужасы",
  "sci-fi": "фантастика",
  "thriller": "триллеры",
  "romance": "мелодрама",
  "western": "вестерн",
  "science fiction": "фантастика",
  "sci fi": "фантастика",
  "scifi": "фантастика",
  "animated": "мультфильмы",
  "family": "семейные",
  "musical": "мюзикл",
  "mystery": "детектив",
  "war": "военные",
  "history": "исторические",
  "biography": "биография",
  "noir": "нуар",
  "superhero": "супергеройские",
  "stand-up": "стендап",
  "music": "мюзикл",
  "tv-movie": "телефильмы"
};

const genresImagesFolder = "./images/genres-images";

const genreImages: Record<string, string> = {
  "action": `${genresImagesFolder}/action`,
  "adventure": `${genresImagesFolder}/adventure`,
  "animation": `${genresImagesFolder}/animation`,
  "comedy": `${genresImagesFolder}/comedy`,
  "crime": `${genresImagesFolder}/crime`,
  "documentary": `${genresImagesFolder}/documentary`,
  "drama": `${genresImagesFolder}/drama`,
  "fantasy": `${genresImagesFolder}/fantasy`,
  "horror": `${genresImagesFolder}/horror`,
  "sci-fi": `${genresImagesFolder}/scifi`,
  "thriller": `${genresImagesFolder}/thriller`,
  "romance": `${genresImagesFolder}/romance`,
  "western": `${genresImagesFolder}/western`,
  "science fiction": `${genresImagesFolder}/science-fiction`,
  "sci fi": `${genresImagesFolder}/scifi`,
  "scifi": `${genresImagesFolder}/scifi`,
  "animated": `${genresImagesFolder}/animated`,
  "family": `${genresImagesFolder}/family`,
  "musical": `${genresImagesFolder}/musical`,
  "mystery": `${genresImagesFolder}/mystery`,
  "war": `${genresImagesFolder}/war`,
  "history": `${genresImagesFolder}/history`,
  "biography": `${genresImagesFolder}/biography`,
  "noir": `${genresImagesFolder}/noir`,
  "superhero": `${genresImagesFolder}/superhero`,
  "stand-up": `${genresImagesFolder}/stand-up`,
  "music": `${genresImagesFolder}/musical`,
  "tv-movie": `${genresImagesFolder}/tv-movie`
};

export function getRussianGenre(englishGenre: string): string {
  if (!englishGenre) return "жанр неизвестен";

  const normalizedGenre = englishGenre.toLowerCase().trim();

  if (genreTranslations[normalizedGenre]) {
    return genreTranslations[normalizedGenre];
  }

  for (const [en, ru] of Object.entries(genreTranslations)) {
    if (normalizedGenre.includes(en)) {
      return ru;
    }
  }

  return englishGenre;
}

export function getGenreObject(englishGenre: string): TGenreObject {
  const GenreObject = {
    originName: englishGenre,
    name: getRussianGenre(englishGenre),
    image: genreImages[englishGenre] || "./images/empty-poster"
  }

  return GenreObject;
}