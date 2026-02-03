import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent>
          <p className="text-sm text-gray-400">
            2026 © All rights reserved.
            <span className="font-bold"> BarberHub</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
