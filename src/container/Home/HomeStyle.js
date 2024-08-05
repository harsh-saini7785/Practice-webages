export const styles = {
    container1: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '15px',
        "@media (max-width: 850px)": {
            display: 'block',
        },
    },
    container3: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        "@media (max-width: 850px)": {
            display: 'block',
        },
    },
    dashBoardContainer: {
        backgroundColor: 'black',
        flex: 1,
        padding: '15px',
    },
    dashboardHeader: {
        fontWeight: 'bold',
        color: 'white',
        padding: '4px 0px',
        fontSize: '22px',
        marginBottom: '15px',
    },
    cardContainer: {
        display: 'flex',
        flex: '1 1 65%',
        gap: "10px",
        // width: '65%',
        "@media (max-width: 850px)": {
            flex: '1 1 100%',
        },
        "@media (max-width: 550px)": {
            flexWrap: 'wrap',
        },
    },
    tableContainer: {
        // display: 'flex',
        // flex: '1 1 65%',
        // gap: "10px",
        width: '65%',
        "@media (max-width: 850px)": {
            width: '100%',
        },
        "@media (max-width: 550px)": {
            // flexWrap: 'wrap',
            // width: '100%',
        },
    },
    netProfitBar: {
        flex: '1 1 35%',
        "@media (max-width: 850px)": {
            flex: '1 1 100%',
            marginTop: '10px'
        },
    },
    reviewHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '22px',
        padding: '0px 10px 10px 0px',
        // marginBottom: '8px'
    },
    reviewcontainer: {
        width: '100%',
        backgroundColor: '#1F2029',
        borderRadius: '4px',
        padding: '15px',
        maxHeight: '500px',
        minHeight: '500px',
        overflow: 'auto',
        '&::-webkit-scrollbar': {
            width: '4px', // Set the width of the scrollbar
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888', // Set the color of the scrollbar thumb
            borderRadius: '10px', // Optionally, set the border radius of the scrollbar thumb
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555', // Set the color of the scrollbar thumb on hover
        },
    }

}