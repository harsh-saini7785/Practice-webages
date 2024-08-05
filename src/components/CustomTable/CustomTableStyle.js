export const styles = {
    tableContainer: {
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
        maxWidth: '100%', maxHeight: '500px', minHeight: '500px', overflow: 'auto', backgroundColor: '#1F2029' 
    },
Button: {
    backgroundColor: '#205748',
        fontSize: '10px',
            color: 'white',
                padding: '1px 10px',
                    borderRadius: '30px',
                        textTransform: 'capitalize',
                            '&: hover': {
        backgroundColor: '#205748',
        }
},
header: {
    color: 'white',
        fontWeight: 'bold',
            fontSize: '22px',
                padding: '10px 10px 0px 10px',
    },
compelete: {
    backgroundColor: '#57363B',
        fontSize: '10px',
            color: 'white',
                padding: '1px 10px',
                    borderRadius: '30px',
                        textTransform: 'capitalize',
                            '&: hover': {
        backgroundColor: '#57363B',
        }
},
avatar: {
    width: '30px',
        height: '30px'
}
}