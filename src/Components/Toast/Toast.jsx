import Image1 from "../../assets/toast.png";

function Toast({ visible }) {
    
    if (!visible) return null;

    return (
        <>
            <div>
                <img src={Image1} alt="" />
            </div>
        </>
    );
}

export default Toast;
