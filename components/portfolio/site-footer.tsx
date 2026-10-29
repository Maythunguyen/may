import { ArrowUp } from "@/components/icons";

export default function SiteFooter() {
  return (<footer>
    <span>© {new Date().getFullYear()} MAY THU NGUYEN</span>
    <span>MADE WITH CURIOSITY & CODE</span>
    <a href="#home">BACK TO TOP <ArrowUp /></a>
  </footer>);
}
