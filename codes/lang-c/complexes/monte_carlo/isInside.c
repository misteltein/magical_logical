bool isInside(Point p, Circle c) {
   double distanceToCenter =
       sqrt(pow(p.x - c.center.x, 2) + pow(p.y - c.center.y, 2));
   return distanceToCenter <= c.radius;
}
