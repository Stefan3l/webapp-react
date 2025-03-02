export default function Button({ type, children }) {
  return (
    <button type={type} className=" mb-2 btn-card">
      {children}
    </button>
  );
}
