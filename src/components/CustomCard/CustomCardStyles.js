export const styles = {
    cardContainer: {
        backgroundColor: '#1F2029',
        flex: '1 1 25%',
        padding: '10px',
        minHeight: '120px',
        borderRadius: '4px',
        "@media (max-width: 550px)": {
            flex: '1 1 48%',
        },
    },
    imageContainer: {
        width: '40px',
        height: '40px',
        borderRadius: '8px',
        padding: '8px',
        backgroundColor: '#5a7fa37a'
    },
    orders: {
        color: 'white',
        fontSize: '10px',
        marginTop: '5px'
    },
    bottom: {
        display: 'flex',
        justifyContent: 'space-between',
        // marginTop: '10px',
        alignItems: 'center'
    },
    statusContainer: {
        display: 'flex',
        color: 'green',
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: '8px'
    },
    number: {
        color: 'white',
        fontSize: '22px',
        fontWeight: 'bold',
        marginTop: '8px',
    },
    percentage: {
        fontSize: '12px'
    },
    
}