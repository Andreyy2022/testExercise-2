function Drawing() {
    const styleCyrc = {
        fill: 'transparent',
        stroke: 'black',
    }
    return (
        <svg viewBox='0 0 1100 1100' width='1100' heigth='1100'>
            <circle cx={700} cy={400} r={150} style={styleCyrc}  />
            <circle cx={700} cy={400} r={300} style={styleCyrc}  />
        </svg>
    );
}

export default Drawing;