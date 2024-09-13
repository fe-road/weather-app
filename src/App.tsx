import WeatherLocationList from './components/weather/WeatherLocationList';

const App = () => {
  return (
    <div className='bg-slate-50 h-screen'>
        <main className='container mx-auto py-4 px-2'>
            Weather App
            <WeatherLocationList />
        </main>
    </div>
  )
};

export default App;
