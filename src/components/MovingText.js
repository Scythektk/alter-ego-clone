import MovingComponent from 'react-moving-text';

const MovingTextFunction = () => {
    return (
        <div>
            <MovingComponent
                className="moving-text"
                type="fadeInFromRight"
                duration="18000ms"
                delay="0s"
                direction="normal"
                timing="linear"
                iteration="infinite"
                fillMode="none"
            >
                ALTER EGO
            </MovingComponent>
            <MovingComponent
                className="moving-text"
                type="fadeInFromRight"
                duration="18000ms"
                delay="18s"
                direction="normal"
                timing="linear"
                iteration="infinite"
                fillMode="none"
            >
                ALTER EGO
            </MovingComponent>
        </div>
    );
};

export default MovingTextFunction;
