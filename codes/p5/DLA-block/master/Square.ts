import P5 from "p5";
import Circle from "./Circle";

/**
 * 正方形のクラス
 */
export default class Square {
    // 幅
    static SIZE: number;
    // 中心座標（デフォルトの座標系）
    xCenter: number;
    yCenter: number;
    // 色で塗られているか
    filled: boolean;

    /**
     * 正方形をつくる
     * @param {number} x - 左上の角の x 座標
     * @param {number} y - 右上の角の y 座標
     */
    constructor(x: number, y: number) {
        this.xCenter = x + 0.5 * Square.SIZE;
        this.yCenter = y + 0.5 * Square.SIZE;
        this.filled = false;
    }

    /**
     * Circle が正方形の中心を含むときは塗りつぶすためのサブルーチン
     * @param {Circle} circle
     */
    updateState(circle: Circle) {
        if (this.filled || circle.ongoing) return;
        const xCircle: number = circle.getX();
        const yCircle: number = circle.getY();
        this.filled =
            Math.sqrt(
                Math.pow(this.xCenter - xCircle, 2) +
                Math.pow(this.yCenter - yCircle, 2)
            ) <= circle.r;
    }

    updateState2(circleA: Circle,circleB: Circle){
        const x1 = circleA.getX();
        const y1 = circleA.getY();
        const x2 = circleB.getX();
        const y2 = circleB.getY();
        const x0 = this.xCenter;
        const y0 = this.yCenter;

        const d = Math.abs((x2-x1)*(y1-y0)-(x1-x0)*(y2-y1))/
            Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2))
        return 
    }

    /**
     * 描画
     * @param {P5} p5
     */
    draw(p5: P5) {
        // 正方形の中心座標と幅で描画するモードに切り替えて描画
        p5.rectMode(p5.CENTER);
        p5.rect(this.xCenter, this.yCenter, Square.SIZE, Square.SIZE);
    }
}

// リンクのところだけハイライトしたいので，filled の判定を変更するべし
