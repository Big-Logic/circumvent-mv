import CheckInput from "./CheckInput";
import useApp from "@/hooks/useApp";

function Form({}) {
  const { documents: items } = useApp();
  return (
    <form>
      <hr />
      <ul className="grid grid-cols-5 gap-6 mt-8">
        {items && (
          <>
            {items.map((item) => (
              <li
                key={item.day}
                className="shadow p-4 flex items-center justify-center border"
              >
                <CheckInput item={item} />
              </li>
            ))}
          </>
        )}
      </ul>
    </form>
  );
}

export default Form;
