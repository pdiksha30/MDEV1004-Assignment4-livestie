import { Collection, Schema,  model } from 'mongoose';

interface IMovie
{
  movieID: string,
  title: string,
  studio: string,
  genres: string[],
  directors: string[],
  writers: string[],
  actors: string[],
  year: number,
  length: number,
  shortDescription: string,
  mpaRating: string,
  posterLink: string,
  criticsRating: number
}

const movieSchema = new Schema<IMovie>({
  movieID: { type: String, required: true },
  title: { type: String, required: true },
  studio: { type: String, required: true },
  genres: { type: [String], required: true },
  directors: { type: [String], required: true },
  writers: { type: [String], required: true },
  actors: { type: [String], required: true },
  year: { type: Number, required: true },
  length: { type: Number, required: true },
  shortDescription: { type: String, required: true },
  mpaRating: { type: String, required: true },
  posterLink: { type: String, required: true },
  criticsRating: { type: Number, required: true },
  });

let Movie = model<IMovie>('Movie', movieSchema);

export default Movie;