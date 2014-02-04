// Test cases for kata
describe('getLiveDeadCellsNumbers', function() {
    it('should return numbers of live/dead cells',function() {
        var config = {
            w : 2,
            h : 2,
            board : [
                [0,0],
                [0,1]
            ]
        };
        expect(getLiveDeadCellsNumbers(config, 0, 0)).toEqual([1, 2]);
    });

    it('should return numbers of live/dead cells',function() {
        var config = {
            w : 3,
            h : 3,
            board : [
                [0,0,0],
                [0,1,0],
                [0,0,0]
            ]
        };
        expect(getLiveDeadCellsNumbers(config, 1, 1)).toEqual([0, 8]);
    });

    it('should return numbers of live/dead cells',function() {
        var config = {
            w : 3,
            h : 3,
            board : [
                [0,0,0],
                [0,1,1],
                [1,0,0]
            ]
        };
        expect(getLiveDeadCellsNumbers(config, 2, 2)).toEqual([2, 1]);
    });
});

describe("checkDieOrLiveForNextPeriod", function(){
    var config = {
        w : 3,
        h : 3,
        board : [
            [0,1,0],
            [0,0,1],
            [1,1,0]
        ]
    };

    it('0,1 should die',function() {
        expect(checkDieOrLiveForNextPeriod(config, 0, 1)).toEqual(0);
    });

    it('2,0 should die',function() {
        expect(checkDieOrLiveForNextPeriod(config, 2, 0)).toEqual(0);
    });

    it('2,1 should live',function() {
        expect(checkDieOrLiveForNextPeriod(config, 2, 1)).toEqual(1);
    });

    it('1,1 should die',function() {
        expect(checkDieOrLiveForNextPeriod(config, 1, 1)).toEqual(0);
    });

    it('1,0 should recover to live',function() {
        expect(checkDieOrLiveForNextPeriod(config, 1, 0)).toEqual(1);
    });
});

describe("getNextPeriod", function(){
    it('should return save config for Block',function() {
        var config = {
            w : 4,
            h : 4,
            board : [
                [0,0,0,0],
                [0,1,1,0],
                [0,1,1,0],
                [0,0,0,0]
            ]
        };
        expect(getNextPeriod(config)).toEqual(config);
    });

    it('should return an oscillator (Toad)',function() {
        var config = {
            w : 6,
            h : 6,
            board : [
                [0,0,0,0,0,0],
                [0,0,0,0,0,0],
                [0,0,1,1,1,0],
                [0,1,1,1,0,0],
                [0,0,0,0,0,0],
                [0,0,0,0,0,0]
            ]
        };

        expect(getNextPeriod(config).board).toEqual([
            [0,0,0,0,0,0],
            [0,0,0,1,0,0],
            [0,1,0,0,1,0],
            [0,1,0,0,1,0],
            [0,0,1,0,0,0],
            [0,0,0,0,0,0]
        ]);
    });
});