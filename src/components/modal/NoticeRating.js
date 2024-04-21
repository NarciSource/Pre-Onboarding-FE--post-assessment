import { useEffect, useState } from "react";
import styled from "styled-components";

export default function NoticeRating({ rating, onClose }) {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);

            setTimeout(() => {
                setShowModal(false);

                setTimeout(() => onClose(), 500);
            }, 2000);
        }, 100);

        return () => clearTimeout(timer);
    }, [onClose]);

    return <ModalDiv className={showModal && "activate"}>{rating}점!</ModalDiv>;
}

const ModalDiv = styled.div`
    position: absolute;
    opacity: 0;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px 50px;
    background: crimson;
    border-radius: 100px;
    color: #fff;
    box-shadow: 3px 4px 11px 0px #00000040;
    transition: all 0.5s;

    &.activate {
        bottom: 45%;
        opacity: 100%;
    }
`;
