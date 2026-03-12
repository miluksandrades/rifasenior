import { bg, numbers } from "./global";

export const App = () => {
  return (
    <div className="flex w-full justify-center min-h-screen bg-gray-100 p-5">
      <div className="flex flex-col justify-center w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
        <img
          src={`${bg}`}
          alt="Logo"
          className={`w-32 h-32 mx-auto mb-6`}
        />
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {numbers.map(({ id, name, sale }) => (
            <div
              key={id}
              className="flex items-center justify-center text-center w-full max-w-24 p-4 border border-gray-300 rounded-md"
            >
              {sale
                ? (
                  <span className="text-green-500 font-bold text-center">
                    {name}
                  </span>
                )
                : (
                  <span className="text-red-500 font-bold text-center">
                    {id}
                  </span>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
