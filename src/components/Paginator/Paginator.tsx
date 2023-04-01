import { PaginatorContainer } from "./styles"
import { Dispatch, SetStateAction, useState } from 'react';
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from 'react-icons/md'

interface IPaginatorProps {
    pagesNumber: number,
    page: number,
    setPage: Dispatch<SetStateAction<number>>
}

export default function Paginator({ pagesNumber, page, setPage }: IPaginatorProps) {

    const [leftIndex, setLeftIndex] = useState<number>(page - 1);
    const [rightIndex, setRightIndex] = useState<number>(page + 10);

    const buttonsIndex = Array.from(Array(pagesNumber).keys());

    return (
        <PaginatorContainer>
            {
                leftIndex > 0 &&
                    <button data-cy="skipleft" className="skip" onClick={
                        () => {
                            setLeftIndex(leftIndex - 1)
                            setRightIndex(rightIndex - 1)
                        }
                    }
                    >
                        <MdKeyboardDoubleArrowLeft />
                    </button>
            }
            {
                buttonsIndex.slice(leftIndex, rightIndex).map((buttonIndex, index) => {
                    return (
                        <button data-cy="pagebutton" key={index} className={page === buttonIndex + 1 ? 'active' : ''} onClick={() => { setPage(buttonIndex + 1) }}>
                            {buttonIndex + 1}
                        </button>
                    )
                })
            }
            {
                rightIndex < pagesNumber &&
                    <button data-cy="skipright" className="skip" onClick={
                        () => {
                            setLeftIndex(leftIndex + 1)
                            setRightIndex(rightIndex + 1)
                        }
                    }
                    >
                        <MdKeyboardDoubleArrowRight />
                    </button>
            }
        </PaginatorContainer >
    )
}