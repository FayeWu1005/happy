import {useState, useEffect} from "react";

//=============================================

function getDataByYear(y){
  console.log(y)
  const URL =  `http://131.181.190.87:3000/rankings?year=${y}`;
  return fetch(URL)
  .then((res) => res.json())
  .then((res) => 
  res.map((data) => {
    return {
      rank: data.rank,
      country: data.country,
      score: data.score,
      year: data.year,
      
    };
  }))
}

function getFactors(f){
  console.log(f);
  const URL =  `http://131.181.190.87:3000/factors/${f}`;
  let token = localStorage.getItem("token");
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }

  return fetch(URL, {headers})
  .then((res) => res.json())
  .then((res) => 
  res.map((data) => {
    return {
      rank: data.rank,
      country: data.country,
      score: data.score,
      year: data.year,
      economy: data.economy,
      family: data.family,
      health: data.health,
      freedom: data.freedom,
      generosity: data.generosity,
      trust: data.trust
    };
    
  }))
}

function getFactorsByCountry(y, c){
  console.log(y, c);
  const URL =  `http://131.181.190.87:3000/factors/${y}?country=${c}`;
  let token = localStorage.getItem("token");
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  }
  return fetch(URL, {
    headers: headers
  })
  .then((res) => res.json())
  .then((res) => 
  res.map((data) => {
    return {
      economy: data.economy,
      family: data.family,
      health: data.health,
      freedom: data.freedom,
      generosity: data.generosity,
      trust: data.trust
    };
  }))
}

function getAllData(c){
  const URL =  `http://131.181.190.87:3000/rankings?country=${c}`;
  return fetch(URL)
  .then((res) => res.json())
  .then((res) => 
  res.map((data) => {
    return {
      rank: data.rank,
      country: data.country,
      score: data.score,
      year: data.year,
      economy: data.economy,
      family: data.family,
      health: data.health,
      freedom: data.freedom,
      generosity: data.generosity,
      trust: data.trust
    };
  }))
}

// export function
export function useData(search){
  const [rowData, setRowData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getDataByYear(search)
    .then((rowData) => {
      setRowData(rowData)})
      
    .catch(() => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

  }, [search])

  return {
    loading,
    rowData,
    error: null
  }
    
}

export function useFactor(search){
  const [rowData, setRowData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getFactors(search)
    .then((rowData) => {
      setRowData(rowData)})
    .catch(() => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

  }, [search])

  return {
    loading,
    rowData,
    error
  }
}

export function useFactorByCountry(year, country){
  const [rowData, setRowData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getFactorsByCountry(year, country)
    .then((rowData) => {
      setRowData(rowData)})
    .catch(() => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

  }, [])

  return {
    loading,
    rowData,
    error: null
  }
}

export function useAllData(search){
  const [rowData, setRowData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getAllData(search)
    .then((rowData) => {
      setRowData(rowData)})
    .catch(() => {
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });

  }, [search])

  return {
    loading,
    rowData,
    error: null
  }
}
