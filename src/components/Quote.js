import MovingTextFunction from './MovingText.js';

const Quote = () => {
    return (
        <div className="quote-container">
            <div className="positioner">
                <MovingTextFunction></MovingTextFunction>
                <p className="quote">
                    "So sweet honey that, finally, he is bitter. The excess
                    taste kills the taste." Shakespeare.
                </p>

                <p className="quote">
                    These words by the bard have passed down the centuries and
                    found a different, deeper meaning in our days.
                </p>
                <p className="quote">
                    Working professionally in the field of private architecture,
                    creating 'volume' beauty, we know exactly when to stop.
                </p>
                <div className="find-flex-container">
                    <div className="find-out">FIND OUT MORE</div>
                    <div className="line find-line"></div>
                </div>
            </div>
        </div>
    );
};

export default Quote;
