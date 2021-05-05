import React from "react";
import Link from 'next/link'
import { useAuth } from '../firebase/auth'

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      
    </div>

  )
}
