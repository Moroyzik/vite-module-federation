const Input = ({ value, onChange, onSubmit }) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e);
            }}
        >
            <div className="flex-row">
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                />
                <button type="submit">Add</button>
            </div>
        </form>
    );
};

export default Input;