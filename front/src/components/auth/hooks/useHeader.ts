import { useEffect } from "react";
import { setHeader } from "../../../redux/slices/headerSlice";
import { useDispatch } from "react-redux";

export function useHeader(title:string){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setHeader(title))
  },[])

}