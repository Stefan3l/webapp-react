import Button from "./Button";

export default function FormData() {
  return (
    <div className="bg-gray-400  flex flex-col justify-center reviews  ">
      <h1 className="font-bold text-2xl text-center mt-3 text-white ">
        Lascia la tua recensione
      </h1>
      <form className="px-4 py-2.5 space-y-2">
        <div className="">
          <label
            className="inline-block mb-1 font-medium text-white"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="bg-white w-full px-2 py-1 rounded-xl"
            id="name"
            type="text"
            value={""}
            placeholder="Inserisci il tuo nome"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-white" htmlFor="vote">
            Vote
          </label>
          <input
            className="bg-white text-white rounded-xl text-center"
            id="vote"
            type="number"
            value={0}
            min={0}
            max={5}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-white" htmlFor="text">
            Recensione
          </label>
          <textarea
            className="bg-white w-full  rounded-xl px-2 py-2"
            rows="5"
            id="text"
            type="text"
            placeholder="Inserisci la tua recensione"
          />
        </div>
        <Button>Invia</Button>
      </form>
    </div>
  );
}
