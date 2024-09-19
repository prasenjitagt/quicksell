const BodyOfData = ({ filter, order }) => {
    // Your existing logic...

    // Example of filtering based on selected filter
    const filteredTickets = data.tickets.filter(ticket => {
        if (filter === 'status') {
            // Implement status filtering logic here
            return true; // Modify this based on your criteria
        }
        if (filter === 'user') {
            // Implement user filtering logic here
            return true; // Modify this based on your criteria
        }
        if (filter === 'priority') {
            // Implement priority filtering logic here
            return true; // Modify this based on your criteria
        }
        return true;
    });

    // Example of ordering based on selected order
    const sortedTickets = filteredTickets.sort((a, b) => {
        if (order === 'priority') {
            return a.priority - b.priority; // Sort by priority
        }
        if (order === 'title') {
            return a.title.localeCompare(b.title); // Sort by title
        }
        return 0;
    });

    return (
        <div className='body-data'>
            {sortedTickets.map(ticket => (
                // Your ticket display logic here
                <div></div>
            ))}
        </div>
    );
};

export default BodyOfData;
