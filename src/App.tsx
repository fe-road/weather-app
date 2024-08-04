import WeatherCityList from './components/weather/WeatherCityList';

const App = () => {
  return (
    <div className='bg-slate-50 h-screen'>
        <main className='container mx-auto py-4 px-2'>
            Weather App
            <WeatherCityList />
        </main>
    </div>
  )
};

export default App;
