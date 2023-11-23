import axios from "axios";

export default class TourService {

  static async getAll() {
    try {
      const response = await axios.get('http://localhost:5000/api/tours');

      return response.data;

    } catch (e) {
      console.log(e);
    }
  }

  static async getToursByTypeSorted(typeSorted) {
    try {
      let response;

      if (typeSorted === 'Sorted by cost') {
        response = await axios.get('http://localhost:5000/api/tours/search', {params: {typeSorted: 'cost'}});
      } else if (typeSorted === 'Sorted by duration') {
        response = await axios.get('http://localhost:5000/api/tours/search', {params: {typeSorted: 'duration'}});
      } else {
        response = await axios.get('http://localhost:5000/api/tours');
      }
      console.log(response.data);

      return response.data;
    } catch (e) {
      console.log(e)
    }
  }

  static async getToursByCostSearch(minCost, maxCost) {
    let response = await axios.get('http://localhost:5000/api/tours/sorted', {
      params: {
        minCost: minCost,
        maxCost: maxCost
      }
    })

    return response.data

  }


}