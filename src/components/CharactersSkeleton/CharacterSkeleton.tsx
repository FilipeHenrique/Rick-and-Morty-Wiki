import { Skeleton } from "./styles";

export default function CharacterSkeleton() {

    return(
            <Skeleton > 
                <div className="image-skeleton" />
                <div className="details-skeleton">
                    <div className="line-skeleton1" />
                    <div className="line-skeleton2" />
                </div>
            </Skeleton>
    )
}