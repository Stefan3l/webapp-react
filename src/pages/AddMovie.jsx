import FormAddMovies from "../components/FormAddMovies";

export default function AddMovie() {
  return (
    <div className="mt-40 ">
      <h1 className="text-red-600 text-center text-4xl font-bold mb-8 ">
        Crea la nuova card Movie
      </h1>
      <div className="bg-gray-200  rounded p-6">
        <FormAddMovies />;
      </div>
    </div>
  );
}
