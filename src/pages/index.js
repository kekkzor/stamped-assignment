import { useEffect, useState } from 'react';
import { getCompanies } from '../services/global';

export default function Home() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then((data) => setCompanies(data));
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {companies && (
          companies.map((item, index) => (
            <div className='item' key={index} style={{ width: 320, background: '#f4f4f4', margin: 15, padding: 15 }}>
              {item.name}
              <ul>
                <li>Solutions</li>
                <ul>
                  <li>Ruth Koelpin</li>
                  <li>Ruth Koelpin</li>
                  <li>Ruth Koelpin</li>
                </ul>
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  )
}