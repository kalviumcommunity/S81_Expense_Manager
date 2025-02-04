

function Home() {
    return (
      <div 
        className="flex items-center justify-center h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534951009808-766178b47a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vbmV5fGVufDB8fDB8fHww)", paddingTop: "300px" }}
      >
        <h1 
          className="text-6xl font-semibold flex items-center p-4 rounded text-background-clip"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1534951009808-766178b47a4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vbmV5fGVufDB8fDB8fHww)" }}
        >
          Expense Manager
        </h1>
      </div>
    );
}

export default Home;