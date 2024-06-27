export default function({ label, handleClick }) {
    return (
        <button onClick={() => handleClick(label)}>{label}</button>
    );
}