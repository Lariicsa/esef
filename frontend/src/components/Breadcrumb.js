import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumb({children}) {
    return (
        <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li>{children}</li>

        </ul>
      </nav>
    )
}
